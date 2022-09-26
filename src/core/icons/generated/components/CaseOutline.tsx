import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaseOutline.svg';

export function CaseOutline(props: TProps) {
  return (
    <Icon {...props} name="CaseOutline">
      <SVG />
    </Icon>
  );
}
