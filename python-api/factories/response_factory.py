import simplejson as json
from flask import Response

def success_response(message):
    return Response(
            status=200,
            mimetype='application/json',
            response=json.dumps(message, use_decimal=True)
        )


def err_response(error, status_code):
    exception_message = str(error)

    api_exception_obj = {
        "error": True,
        "message": exception_message
    }
    print(f"--- ERROR {status_code} ---")
    print(api_exception_obj)
    return Response(
            status=status_code,
            mimetype='application/json',
            response=json.dumps(api_exception_obj)
        )