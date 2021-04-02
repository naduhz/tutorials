import math
import os
import sys

import requests

r = requests.get("https://coreyms.com")
print(r.status_code)