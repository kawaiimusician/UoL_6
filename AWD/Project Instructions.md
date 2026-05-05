For running the virtual environment: use the command `conda activate advanced_web_dev` when inside of UoL_6 folder
to stop running: `conda deactivate`

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

To log into postgres in the console use the following command: `psql -U postgres -d postgres`
-U postgres logs you into the user "postgres" and -d puts you in the database called "postgres"
When it asks for the password use the one in 1pass under "PostgreSQL Superuser"
To exit postgres use `\q`

Postgres Helpful Commands:
\list               lists the databases
\c {db name}        connects to the specified db
\d                  describe the relation between tables
\d {table name}     describes the specified table
\! clear            clears console

