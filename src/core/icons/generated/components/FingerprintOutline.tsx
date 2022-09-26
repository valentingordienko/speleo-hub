import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FingerprintOutline.svg';

export function FingerprintOutline(props: TProps) {
  return (
    <Icon {...props} name="FingerprintOutline">
      <SVG />
    </Icon>
  );
}
