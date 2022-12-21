import { CfnOutput, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { join } from "path";

export class FrontendStack extends Stack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    const bucket = new Bucket(this, "frontend-bucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    });
    const bucketOrigin = new S3Origin(bucket);
    const deployment = new BucketDeployment(this, "bucket-deployment", {
      destinationBucket: bucket,
      sources: [Source.asset(join(__dirname, "../../../frontend/build"))],
    });
    new CfnOutput(this, "bucket-url", {
      exportName: "bucket-url",
      value: bucket.bucketWebsiteUrl,
    });
  }
}
