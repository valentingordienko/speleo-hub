import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EnvelopeOutline.svg';

export function EnvelopeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EnvelopeOutline">
      <SVG />
    </Icon>
  );
}
