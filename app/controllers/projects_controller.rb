class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
  	@projectindex = {
			projects: Project.all
    }
  end

  def show
  end

  def new
		@projectnew = {
      project: Project.new,
			form: {
	      action: projects_path,
	      csrf_param: request_forgery_protection_token,
	      csrf_token: form_authenticity_token
	    } 
	  }

	end

  def edit
  end

	def create
    @project = Project.new(project_params.merge(user_id: current_user.id))

    binding.pry
    if @project.save
      render json: @project, status: 200
    else
      redirect_to projects_path
    end
	end


  def update
  	@project.update(project_params)
  end

  def destroy
    @project.destroy
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:name, :user_id, :tasks_attributes => [:name, :start_time, :end_time, :project_id])
    end

end
