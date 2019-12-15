--- 
contact: 
  allowedFields: 
    - name
    - email
    - message
  branch: master
  commitMessage: "New message in {options.slug}"
  filename: "message-{@timestamp}"
  format: yaml
  generatedFields: 
    date: 
      options: 
        format: iso8601
      type: date
  moderation: true
  path: "data/contact/{options.slug}"
  requiredFields: 
    - name
    - email
    - message
  transforms: 
    email: md5
