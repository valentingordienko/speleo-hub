import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bangladesh.svg';

export function Bangladesh(props: TBaseProps) {
  return (
    <Icon {...props} name="Bangladesh">
      <SVG />
    </Icon>
  );
}
