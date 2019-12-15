--- 
comments: 
  allowedFields: 
    - name
    - email
    - comment
    - reply_to
  branch: master
  commitMessage: "New comment in {options.slug}"
  filename: "comment-{@timestamp}"
  format: yaml
  generatedFields: 
    date: 
      options: 
        format: iso8601
      type: date
  moderation: true
  path: "data/comments/{options.slug}"
  requiredFields: 
    - name
    - email
    - comment
  transforms: 
    email: md5
