import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetyCertificateOutline.svg';

export function SafetyCertificateOutline(props: TProps) {
  return (
    <Icon {...props} name="SafetyCertificateOutline">
      <SVG />
    </Icon>
  );
}
