## Event theme
- Security monitoring System

## Event types
- Monitoring alerts
    - Monitoring alerts is for monitoring all alerts types, such as an intruder, rapid incresement of heat and smoke.
- Monitoring access
    - Monitoring access is for monitoring the users access into the security system.


## Endpoint
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /monitoring/ping | To call all webhooks for testing |
| GET | /monitoring/alert | To retrieve all alert webhooks |
| GET | /monitoring/access | To retrieve all access webhooks |
| --- | --- | --- |
| POST | /monitoring/alert | To add a webhook for alerts events |
| POST | /monitoring/access | To add a webhook for access events |
| --- | --- | --- |
| DELETE | /monitoring/alert | To delete a single webhook for alert |
| DELETE | /monitoring/access | To delete a single webhook for access |

### Data to send with the POST and DELETE endpoints
````
{
     url: [your_endpoint], 
     password: [your_password]
}
````

## User guide

Create register a webhook with one of the following endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /monitoring/alert | To add a webhook for alerts events |
| POST | /monitoring/access | To add a webhook for access events |