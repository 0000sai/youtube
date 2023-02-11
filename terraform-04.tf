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
  profile = "default"
}

#Variable Block for ec2 ami
variable "ec2_ami" {
  type = string
  description = "This variable is used to store ami id of ec2 instance"
  default = "ami-0b5eea76982371e91" 
}

#Variable Block for ec2 instance type
variable "ec2_type" {
  type = string
  description = "This variable is used to store the instance type of ec2 instance"
  default = "t2.micro"
}

#EC2 Resource Block
resource "aws_instance" "my_ec2" {
  ami                     = "${var.ec2_ami}"
  instance_type           = "${var.ec2_type}"
  security_groups = ["ssh"]
  tags = {
    Name = "first-ec2-instance"
  }
}

#Showing public ip of the EC2 instance in the output
output "ec2_public_ip" {
  value = "${aws_instance.my_ec2.public_ip}"
}
