const template = `{
  "properties": {},
  "deployments": [
    {
      "deploymentSequenceNumber": {{ deploymentSequenceNumber }},
      "updateSequenceNumber": {{ updateSequenceNumber }},
      "associations": [
        {
          "associationType": "issueIdOrKeys",
          "values": {{{ issueKeys }}}
        }
      ],
      "displayName": "{{ displayName }}",
      "url": "{{ deployUrl }}",
      "description": "{{ description }}",
      "lastUpdated": "{{ lastUpdated }}",
      "label": "{{ label }}",
      "state": "{{ state }}",
      "pipeline": {
        "id": "{{ pipelineId }}",
        "displayName": "{{ pipelineName }}",
        "url": "{{ pipelineURL }}"
      },
      "environment": {
        "id": "{{ environmentId }}",
        "displayName": "{{ environmentName }}",
        "type": "{{ environmentType }}"
      },
      "schemaVersion": "1.0"
    }
  ],
  "providerMetadata": {
    "product": "Github Actions"
  }
}`;

export default template;
