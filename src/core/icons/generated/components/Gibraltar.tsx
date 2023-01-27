import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gibraltar.svg';

export function Gibraltar(props: TBaseProps) {
  return (
    <Icon {...props} name="Gibraltar">
      <SVG />
    </Icon>
  );
}
