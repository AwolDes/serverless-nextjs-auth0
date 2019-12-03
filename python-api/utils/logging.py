import os

def log_event(message, **kwargs):
    if 'dev_only' in kwargs and (os.environ['STAGE'] == 'dev' or os.environ['STAGE'] == 'staging'):
        print(message)
    else:
        print(message)