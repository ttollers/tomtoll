---
title: Fargate With EKS
date: "2020-02-21T12:12:03.284Z"
---

## TLDR
Fargate in EKS is an exciting idea if for anyone who is a fan of serverless archectures. However, 
it currently has some glaring limitations that users should be aware of.

### Use it when:
- You have unstable workflows (like cronjobs)
- You're not able to make full use of underlying EC2 instances

### Not so good for:
- Stateful sets. Fargate does not support volumes.
- Clusters reliant on daemonsets.
- Short start up times.


## What is Fargate?
Fargate is AWS's answer to serverless containers. You can run you docker containers on Fargate
without having to worry about the underlying infrastructure.

### That's the same as Kubernetes right...?
No. Kubernetes does not manage the underlying infrastructure for you. Managed services like EKS
do using [EC2]().

## Can I use both EC2 and Fargate?
Absolutely. If you have specific workloads that fit each usecase then they could easily be deployed
on Fargate while leaving the rest on EC2.
Do be aware that this is adding a complexity overhead... and one of the whole reasons to use Fargate
is to REDUCE complexity!

## What are the benefits over EC2?

> Fargate with EKS is still in it's infancy. Until it supports stateful workloads it is likely that
> you'll still need to use EC2 in parts. If you're going to migrate only part of your cluster to 
> Fargate, be aware that this is defeating one of the whole points you'd use it in the first place 
> (reducing complexity). The other reasons (mainly costs) must be very compelling to make this worth it.

