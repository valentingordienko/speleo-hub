import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintKittsAndNevis.svg';

export function SaintKittsAndNevis(props: TProps) {
  return (
    <Icon {...props} name="SaintKittsAndNevis">
      <SVG />
    </Icon>
  );
}
