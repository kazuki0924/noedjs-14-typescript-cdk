#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Noedjs14TypescriptCdkStack } from '../lib/noedjs-14-typescript-cdk-stack';

const app = new cdk.App();
new Noedjs14TypescriptCdkStack(app, 'Noedjs14TypescriptCdkStack');
