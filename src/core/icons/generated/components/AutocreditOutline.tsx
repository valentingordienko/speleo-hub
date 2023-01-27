import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AutocreditOutline.svg';

export function AutocreditOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AutocreditOutline">
      <SVG />
    </Icon>
  );
}
