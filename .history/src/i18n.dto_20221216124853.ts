import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { resolve } from 'path';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}


