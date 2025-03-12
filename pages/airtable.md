Is the new Manager Meta using AirTable?

Well, kinda it is, it's cool and it has a lot of new features that lets you appear organized and professional, but what else?

One of the few phrases that I been hearing for the past year at the moment of writing this, is that all things must be imported to Airtable, but what does it even mean?


Interesting Features

Sync Tables

## API Sync

Bsically an endpoint that allows you to make updates to a page associated with it. Once created from the integrations menu, it will give you a query like this, but without the data part:

```
curl -X POST "https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}" \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: text/csv" \
--data 'column1,column2
row1-column1,row1-column2
row2-column1,row2-column2'
```

One would expect to have an option to provide a way to upload a file, but no.

[](https://airtable.com/developers/web/api/post-sync-api-endpoint)

[](https://airtable.com/create/tokens)
[](https://airtable.com/developers/web/api/post-sync-api-endpoint)

[](https://support.airtable.com/docs/airtable-sync-integration-sync-api)

My workaround was to cat the CSV file:

```
curl -X POST "https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}" \
-H "Authorization: Bearer YOURAWESOMETOKENHERE" \
-H "Content-Type: text/csv" \
--data "$(cat myspreedsheet.csv)"
```


And yes, because of this I had to export the table as CSV, but without the descriptions or descriptions updates, as it breaks the format...

But that wasn't the full extend of the problem! 5 days for us, it about 118 records, were more than what it could handle. In theory it was 10.000 characters, I first I fought it was "ah 10K rows"


# Integrations


## Jira
