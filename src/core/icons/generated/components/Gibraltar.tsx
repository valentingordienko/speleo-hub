import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gibraltar.svg';

export function Gibraltar(props: TProps) {
  return (
    <Icon {...props} name="Gibraltar">
      <SVG />
    </Icon>
  );
}
