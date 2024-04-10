import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
app = Celery("myproject")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f"Request: {self.request!r}")


app.conf.beat_schedule = {
    "realtime_task_schedule": {
        "task": "updateBalance",
        "schedule": crontab(minute='*/15'),
    },
    "realtime_task_wallet_schedule": {
        "task": "updateWallet",
        "schedule": crontab(minute='*/15'),
    }
}