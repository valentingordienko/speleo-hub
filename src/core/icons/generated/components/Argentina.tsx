import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Argentina.svg';

export function Argentina(props: TBaseProps) {
  return (
    <Icon {...props} name="Argentina">
      <SVG />
    </Icon>
  );
}
