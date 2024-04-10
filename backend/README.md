# 309_shenanigans

Created the skeleton files.

We have 3 apps: 
- calendars
- schedule
- accounts
  
Each app has their associated:
- models folder
- views folder
- serializers folder
- admin.py file
- urls.py file
- apps.py file

REST framework is installed under venv and added to installed apps in root directory's settings.py file.
All the models are added to root directory's settings.py; however, you will need to register your models in your app's admin.py file (this is not necessary for the functionality of your APIs but will let you interact with the models using admin panel).

In the OneOnOne Folder:
1. source venv/bin/activate
(create super user if haven't by: 
python3 manage.py createsuperuser)
2. python3 manage.py makemigrations
3. python3 manage.py migrate
4. python3 manage.py runserver


Changes Made to deploy the backend to render: (using this guide: https://docs.render.com/deploy-django#updating-an-existing-django-project)
added psycopg2-binary
added dj-database-url - at this point cannot import dj-database-url into settings.py

- created a requirements.txt file using pip freeze requirements.txt

- could not modify the settngs.py

Did not set up static file serving as i will be deploying front end separately 

- added build.sh





