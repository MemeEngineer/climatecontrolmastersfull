class JobsController < ApplicationController


#GET /jobs
def index
jobs = Job.all
render json: jobs, status: :ok
end



#post /jobs
    def create
        jobs = Job.create!(job_params)
        render json: jobs, status: :created
        # jobs = Job.new(job_params)
        # if @job.save
        #   render json: @job, status: :created, location: @job
        # else
        #   render json: @job.errors, status: :unprocessable_entity
        # end
    end


    private
    def job_params
        params.permit(:firstname, :lastname, :email, :telephone, :subject, :servicejobs, :message)
      end
end
