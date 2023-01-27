import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetyCertificateOutline.svg';

export function SafetyCertificateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SafetyCertificateOutline">
      <SVG />
    </Icon>
  );
}
