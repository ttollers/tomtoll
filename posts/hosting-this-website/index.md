---
title: Static Website Hosting (this site included)
date: "2020-02-21T12:12:03.284Z"
---

## TLDR
If you don't need any kind of persistence layer, S3/Cloudfront is the
perfect choice.

### It's good because:
- Minimal setup
- Fast (cloudfront puts content close to your readers)
- Cheap (you pay per request)
- Scalable
- Easy to configure

### Not so good for:
- Dynamic websites. If you need a persitence layer, you'll need 
- a more complicated setup.
- Managing a large amount of clusters in different environments
