import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cuba.svg';

export function Cuba(props: TProps) {
  return (
    <Icon {...props} name="Cuba">
      <SVG />
    </Icon>
  );
}
