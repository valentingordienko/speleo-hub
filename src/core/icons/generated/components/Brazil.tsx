import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Brazil.svg';

export function Brazil(props: TProps) {
  return (
    <Icon {...props} name="Brazil">
      <SVG />
    </Icon>
  );
}
