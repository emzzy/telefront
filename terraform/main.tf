module "ecr" {
  source = "./modules/ecr"

  repository_name = "my-application"
  environment     = "production"
}