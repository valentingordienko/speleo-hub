import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AutocreditOutline.svg';

export function AutocreditOutline(props: TProps) {
  return (
    <Icon {...props} name="AutocreditOutline">
      <SVG />
    </Icon>
  );
}
