class TasksController < ApplicationController
	before_action :set_task, only: [:show, :edit, :update, :destroy]

  def index
  	@taskindex = {
			tasks: Task.all
    }
  end

  def show
  end

  def new
		@tasknew = {
      task: Task.new,
			form: {
	      action: tasks_path,
	      csrf_param: request_forgery_protection_token,
	      csrf_token: form_authenticity_token
	    } 
	  }

	end

  def edit
  end

	def create
		@task = Task.new(task_params)

		if @task.save
      render json: @task, status: 200
    else
      redirect_to tasks_path
    end
	end


  def update
  	@task.update(task_params)
  end

  def destroy
    @task.destroy
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :start_time, :end_time, :project_id)
    end

end
