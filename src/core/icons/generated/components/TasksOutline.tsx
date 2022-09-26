import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TasksOutline.svg';

export function TasksOutline(props: TProps) {
  return (
    <Icon {...props} name="TasksOutline">
      <SVG />
    </Icon>
  );
}
