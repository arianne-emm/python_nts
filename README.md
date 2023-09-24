# NTS (Not Today Suicide) Project

## Requirements
- Install PyCharm CE (Community Edition) - https://www.jetbrains.com/help/pycharm/installation-guide.html
- Install Python Version >3.7 - https://www.python.org/downloads/
- Install ngrok - https://ngrok.com/download

## Instructions
1. Clone down this project
```
https://github.com/arianne-emm/python_nts.git
```

2. Open python_nts project in Pycharm
```
PyCharm > File > Open > python_nts
```

3. Set up Python Virtual Environment - https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html#python_create_virtual_env

4. Install requirements from requirements.txt 
```
pip install -r requirements.txt
```

5. Run main file
```
flask --app main run --debug
```

6. Navigate to local host in browser to view website
```
http://127.0.0.1:5000
```

7. To view the website on your mobile device, open a separate Terminal window on your machine
and run command `ngrok http 5000`. This allows you to open a HTTP tunnel that's pointing to your local server running on port 5000.

```commandline
ngrok                                                                                                                (Ctrl+C to quit)
                                                                                                                                     
Introducing Always-On Global Server Load Balancer: https://ngrok.com/r/gslb                                                          
                                                                                                                                     
Session Status                online                                                                                                 
Account                       Jane Doe (Plan: Free)                                                                          
Version                       3.3.4                                                                                                  
Region                        United States (us)                                                                                     
Latency                       -                                                                                                      
Web Interface                 http://127.0.0.1:4040                                                                                  
Forwarding                    https://d757-74-193-65-45.ngrok-free.app -> http://localhost:5000                                      
                                                                                                                                     
Connections                   ttl     opn     rt1     rt5     p50     p90                                                            
                              0       0       0.00    0.00    0.00    0.00  
```

On your mobile device, visit the Forwarding URL to view the website.
Ex: `https://d757-74-193-65-45.ngrok-free.app`

## Notes

If you want to change any words that trigger the alert message,
navigate to file `static/js/demo-3.js` and update list of words on Line 7.

If you want to change the content on the Home page, navigate to file `templates/index.html`. 


