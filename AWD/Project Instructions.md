For running the virtual environment: use the command `conda activate advanced_web_dev` when inside of UoL_6 folder
to stop running: `conda deactivate`

WSL: Use it instead! Open a folder in WSL by opening the WSL terminal and navigating to the folder. Then type `code .` to open the folder you are in.

to start the virtual environment:
`source {env name}/bin/activate`

To create a Django project:
1. route to the folder you want the project to be inside
2. use command `django-admin startproject {proj name}`

To create a Django App (inside a project)
1. route to the parent folder of the project
2. use command `python manage.py startapp {app name}`
3. in the project, go to the settings.py and add the app to the INSTALLED_APPS

When creating a new model in Django:
1. navigate to the parent folder and run `python manage.py makemigrations`
2. run `python manage.py migrate` to run the commands in the migration

To load data to the database:
1. use `python manage.py loaddata {child directory/file name}`

to run a django project:
1. once conda is running, route to the directory that contains manage.py
2. use command `python manage.py runserver 127.0.0.1:8080`


To start up postgres in WSL:
`sudo service postgresql start`
To stop postgres in WSL
`sudo service postgresql stop`
To check the status of postgres
`sudo service postgresql status`

To connect to DB:
`sudo -u postgres psql`

Postgres Helpful Commands:
\list               lists the databases
\c {db name}        connects to the specified db
\d                  describe the relation between tables
\d {table name}     describes the specified table
\! clear            clears console
