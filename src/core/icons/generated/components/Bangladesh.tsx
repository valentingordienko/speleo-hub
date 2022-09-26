import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bangladesh.svg';

export function Bangladesh(props: TProps) {
  return (
    <Icon {...props} name="Bangladesh">
      <SVG />
    </Icon>
  );
}
