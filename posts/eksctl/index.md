---
title: EKSCTL
date: "2020-02-21T12:12:03.284Z"
---

## TLDR
It's not perfect but it's the quickest and easiest way of getting setup
with kubernetes on EKS as quickly as possible.

### Use it when:
- You want to use a managed kubernetes solution with minimal setup.

### Not so good for:
- Infrastructure as code for underlying resources.
- Managing a large amount of clusters in different environments

> I'd higly reccommend using eksctl. It'll save you a huge amount 
> of boiler plate DevOps work. 

## What is eksctl
eksctl is a cli tool for deploying kuberntes clusters using AWS EKS.
EKS requires a surprising amount of boiler plate code to get running 
things like auto-scalings, persistent volumes etc. eksctl handles a
lot of this for you while still allowing you to configure the important
bits.

TODO: quick gif of creating a kubernetes cluster with eksctl
