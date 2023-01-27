import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Brazil.svg';

export function Brazil(props: TBaseProps) {
  return (
    <Icon {...props} name="Brazil">
      <SVG />
    </Icon>
  );
}
