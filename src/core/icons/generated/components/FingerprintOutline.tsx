import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FingerprintOutline.svg';

export function FingerprintOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FingerprintOutline">
      <SVG />
    </Icon>
  );
}
