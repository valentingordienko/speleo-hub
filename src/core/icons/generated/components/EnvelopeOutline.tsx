import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EnvelopeOutline.svg';

export function EnvelopeOutline(props: TProps) {
  return (
    <Icon {...props} name="EnvelopeOutline">
      <SVG />
    </Icon>
  );
}
