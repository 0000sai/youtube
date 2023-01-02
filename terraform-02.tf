#Terraform Block
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.0"
    }
  } 
} 

#AWS Provider Block
provider "aws" {
  region = "us-east-1"
  profile = "default" #Before using profile = "default", you need to set up AWS credentials in your local system using AWS configure. 
}

#SQS Resource Block
resource "aws_sqs_queue" "terraform_queue" {
  name = "first-terraform-queue"
}
