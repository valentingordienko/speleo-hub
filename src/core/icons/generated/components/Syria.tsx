import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Syria.svg';

export function Syria(props: TProps) {
  return (
    <Icon {...props} name="Syria">
      <SVG />
    </Icon>
  );
}
