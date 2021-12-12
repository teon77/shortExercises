import React from 'react'
import { Part } from "./Part"
import { CoursePart } from '../types';

export const Content = ({ courseParts }: { courseParts: CoursePart[] }) =>
    <div>
      {courseParts.map((part, i) =>
        <Part key={i} part={part} />
      )}
    </div>

