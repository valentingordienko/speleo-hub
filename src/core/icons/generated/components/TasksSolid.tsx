import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TasksSolid.svg';

export function TasksSolid(props: TProps) {
  return (
    <Icon {...props} name="TasksSolid">
      <SVG />
    </Icon>
  );
}
