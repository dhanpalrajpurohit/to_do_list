## Setup The Backend Application

### Install the package in environment

```commandline
cd planner_backend\
pip install -r requirements.txt
```

### Run the application
```commandline
make migrations migrate runserver
```

### Create Super User
```commandline
python manage.py createsuperuser
```

visit to the http://localhost:8000/admin