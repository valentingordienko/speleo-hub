import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GroupOfPersonsOutline.svg';

export function GroupOfPersonsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GroupOfPersonsOutline">
      <SVG />
    </Icon>
  );
}
