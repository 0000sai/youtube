#Terraform Block
terraform {
  required_version = ">= 1.0" #1.5, 1.8, 2.0, 5.0
  required_providers {
    aws = {
      source = "hashicorp/aws"
      #source = "registry.terraform.io/hashicorp/aws"
      version = "~> 4.0" #4.1, 4.2, 4.3 but not 5.0
    }
  } 
} 

#AWS Provider Block
provider "aws" {
  region = "us-east-1"
  profile = "default"
  #access_key = "AKIA3R3M4DE3H45KHB75"
  #secret_key = "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"
}

#S3 Resource Block
resource "aws_s3_bucket" "terraform_s3_bucket" {
  bucket = "surojbera2023"
}
