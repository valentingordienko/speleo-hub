import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Syria.svg';

export function Syria(props: TBaseProps) {
  return (
    <Icon {...props} name="Syria">
      <SVG />
    </Icon>
  );
}
