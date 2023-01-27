import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cuba.svg';

export function Cuba(props: TBaseProps) {
  return (
    <Icon {...props} name="Cuba">
      <SVG />
    </Icon>
  );
}
