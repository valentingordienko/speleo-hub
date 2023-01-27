import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/India.svg';

export function India(props: TBaseProps) {
  return (
    <Icon {...props} name="India">
      <SVG />
    </Icon>
  );
}
