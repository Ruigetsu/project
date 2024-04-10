FROM python:3.10
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install --upgrade pip 
RUN pip install moralis
RUN pip install -r  requirements.txt
COPY  . /backend/ 
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]